import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'iantarquini4@gmail.com',
        pass: 'rkjk takr nhbm igsq',
    },
});



export const enviarCorreo = async (to: string, subject: string, html: string) => {
    try {
        const info = await transporter.sendMail({
            from: 'iantarquini4@gmail.com',
            to,
            subject,
            html,
        });
        console.log(`Correo enviado: ${info.response}`);
    } catch (error: any) {
        console.error('Error al enviar en correo: ', error.message); 
        console.error('Stack:', error.stack);
        throw new Error('No se pudo enviar el correo.');
    }
};