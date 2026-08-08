export type AppointmentPayload = {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export type AppointmentResult = {
  ok: boolean;
  message: string;
};

export async function requestAppointment(payload: AppointmentPayload): Promise<AppointmentResult> {
  // Replace this mock with a backend, WhatsApp redirect or email integration later.
  await new Promise((resolve) => window.setTimeout(resolve, 650));

  return {
    ok: true,
    message: `Thank you, ${payload.name}. Your appointment request has been noted for review.`,
  };
}
