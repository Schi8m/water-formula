import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Создаём транспорт для отправки через reg.ru
const transporter = nodemailer.createTransport({
  host: 'mail.hosting.reg.ru',
  port: 465,
  secure: true, // true для порта 465
  auth: {
    user: 'contact@formwater.ru', // ваш ящик на reg.ru
    pass: process.env.SMTP_PASSWORD, // пароль от ящика, лучше в переменной окружения
  },
});

const generateAdminHtml = (
    requestNumber: number | string,
    requestDate: any,
    name: string,
    email: string,
    version: string,
    licenses: number | string, 
    message: string) => `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Новая заявка ${requestNumber}</title>
    </head>

    <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, Helvetica, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:24px 0;">
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

                    <!-- Шапка -->
                    <tr>
                        <td style="background-color:#0a5ca8; padding:24px 32px;">
                        <h1 style="margin:0; color:#ffffff; font-size:20px; font-weight:600;">
                            Новая заявка с сайта formwater.ru
                        </h1>
                        </td>
                    </tr>

                    <!-- Номер и дата -->
                    <tr>
                        <td style="padding:24px 32px 8px 32px;">
                        <p style="margin:0 0 6px 0; color:#333333; font-size:15px;">
                            <strong>Номер заявки:</strong> ${requestNumber}
                        </p>
                        <p style="margin:0; color:#333333; font-size:15px;">
                            <strong>Дата:</strong> ${requestDate}
                        </p>
                        </td>
                    </tr>

                    <!-- Параметры заявки -->
                    <tr>
                        <td style="padding:16px 32px 24px 32px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                            <tr>
                                <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555; width:40%;">
                                    Имя / Организация
                                </td>
                            <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111;">
                                ${name}
                            </td>
                            </tr>
                            <tr>
                            <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555;">
                                Почта
                            </td>
                            <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111;">
                                <a href="mailto:${email}" style="color:#0a5ca8; text-decoration:none;">${email}</a>
                            </td>
                            </tr>
                            <tr>
                            <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555;">
                                Версия поставки
                            </td>
                            <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111;">
                                ${version}
                            </td>
                            </tr>
                            <tr>
                            <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555;">
                                Кол-во лицензий
                            </td>
                            <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111;">
                                ${licenses}
                            </td>
                            </tr>
                            <tr>
                            <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555; vertical-align:top;">
                                Дополнительная информация
                            </td>
                            <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111; white-space:pre-wrap;">
                                ${message || '—'}
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>

          <!-- Кнопка ответить -->
          <tr>
            <td style="padding:0 32px 32px 32px;">
              <a href="mailto:${email}?subject=Re: Заявка ${requestNumber}"
                 style="display:inline-block; background-color:#0a5ca8; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:14px; font-weight:600;">
                Ответить клиенту
              </a>
            </td>
          </tr>

          <!-- Футер -->
          <tr>
            <td style="background-color:#f8f9fb; padding:20px 32px; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:#888888; line-height:1.5;">
                Это автоматическое уведомление с сайта formwater.ru.<br>
                ООО «Идея-Софт» · contact@formwater.ru
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const generateRequestHtml = (
    requestNumber: number | string,
    requestDate: any,
    version: string,
    licenses: number | string, 
    message: string) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Заявка ${requestNumber} принята</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:24px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          
          <!-- Шапка -->
          <tr>
            <td style="background-color:#0a5ca8; padding:28px 32px;">
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:600;">
                Формула воды
              </h1>
              <p style="margin:6px 0 0 0; color:#cfe3f7; font-size:13px;">
                Программный продукт для инженерных расчётов
              </p>
            </td>
          </tr>

          <!-- Приветствие -->
          <tr>
            <td style="padding:32px 32px 16px 32px;">
              <p style="margin:0 0 16px 0; color:#111111; font-size:16px;">
                Добрый день!
              </p>
              <p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">
                Вы получили это письмо, потому что подали заявку
                <strong>№ ${requestNumber}</strong> от <strong>${requestDate}</strong>
                с сайта <a href="https://formwater.ru" style="color:#0a5ca8; text-decoration:none;">formwater.ru</a>
                нашего программного продукта «Формула воды» для инженерных расчётов
                внутренних систем холодного и горячего водоснабжения.
              </p>
            </td>
          </tr>

          <!-- Параметры заявки -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <p style="margin:0 0 12px 0; color:#111111; font-size:15px; font-weight:600;">
                Параметры заявки:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555; width:45%;">
                    Версия поставки
                  </td>
                  <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111;">
                    ${version}
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555;">
                    Кол-во лицензий
                  </td>
                  <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111;">
                    ${licenses}
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 12px; background-color:#f8f9fb; border:1px solid #e5e7eb; font-size:14px; color:#555555; vertical-align:top;">
                    Дополнительная информация
                  </td>
                  <td style="padding:10px 12px; border:1px solid #e5e7eb; font-size:14px; color:#111111; white-space:pre-wrap;">
                    ${message || '—'}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Благодарность -->
          <tr>
            <td style="padding:0 32px 32px 32px;">
              <p style="margin:0; color:#111111; font-size:15px;">
                Благодарим Вас за обращение!
              </p>
            </td>
          </tr>

          <!-- Подпись -->
          <tr>
            <td style="padding:0 32px 32px 32px; border-top:1px solid #e5e7eb;">
              <p style="margin:24px 0 0 0; color:#333333; font-size:14px; line-height:1.6;">
                С уважением, команда разработки<br>
                <strong>ООО «Идея-Софт»</strong>
              </p>
            </td>
          </tr>

          <!-- Контакты -->
          <tr>
            <td style="background-color:#f8f9fb; padding:24px 32px; border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 12px 0; color:#555555; font-size:13px; line-height:1.6;">
                107045, город Москва, Последний пер., д. 7<br>
                <a href="mailto:contact@formwater.ru" style="color:#0a5ca8; text-decoration:none;">contact@formwater.ru</a>
              </p>
              <p style="margin:0 0 12px 0; color:#555555; font-size:13px; line-height:1.6;">
                <strong>Многоканальная линия:</strong> +7 (800) 700-53-57<br>
                Режим работы: ежедневно, с 8:00 до 22:00 (мск)
              </p>
              <p style="margin:0; color:#555555; font-size:13px; line-height:1.6;">
                <strong>Для получения поддержки:</strong> +7 (962) 905-01-11<br>
                Режим работы: ежедневно, с 10:00 до 18:00 (мск)
              </p>
            </td>
          </tr>

          <!-- Дисклеймер -->
          <tr>
            <td style="padding:16px 32px; background-color:#ffffff;">
              <p style="margin:0; font-size:11px; color:#999999; line-height:1.5; text-align:center;">
                Это автоматическое письмо. Пожалуйста, не отвечайте на него —<br>
                для связи используйте контакты выше.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, version, licenses, message } = data;

    // Генерируем номер и дату
    const requestNumber = `FW-${Date.now().toString().slice(-6)}`;
    const requestDate = new Date().toLocaleString('ru-RU');

    
    // 1. Письмо ВАМ (уведомление о заявке)
    await transporter.sendMail({
      from: '"Формула воды" <contact@formwater.ru>',
      to: 'contact@formwater.ru',
      subject: `Новая заявка ${requestNumber}`,
      html: generateAdminHtml(requestNumber, requestDate, name, email, version, licenses, message),
    });

    // 2. Письмо-АВТООТВЕТ пользователю
    await transporter.sendMail({
      from: '"Формула воды" <contact@formwater.ru>',
      to: email, // email из формы
      subject: `Заявка № ${requestNumber} принята`,
      html: generateRequestHtml(requestNumber, requestDate, version,licenses, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}