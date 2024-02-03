import { Webhook, type WebhookRequiredHeaders } from 'svix'
import { createUser } from '@/app/lib/api/user/user'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import type { WebhookEvent } from '@clerk/nextjs/server'
import type { IncomingHttpHeaders } from 'http'

const webhookSecret = process.env.WEBHOOK_SECRET ?? ''

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function handler (request: Request) {
  const payload = await request.json()
  const headersList = headers()
  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature')
  }
  const wh = new Webhook(webhookSecret)
  let evt: WebhookEvent | null = null

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as WebhookEvent
  } catch (err) {
    console.error((err as Error).message)
    return NextResponse.json({}, { status: 400 })
  }

  if (evt.type === 'user.created') {
    const email = evt.data.email_addresses[0].email_address
    const authId = evt.data.id
    await createUser({
      email,
      authId
    })

    return NextResponse.json({}, { status: 200 })
  } else {
    console.error('Unknown event type:', evt.type)
    return NextResponse.json({}, { status: 400 })
  }
}

export const GET = handler
export const POST = handler
export const PUT = handler
