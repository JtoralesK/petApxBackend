import * as sgMail from "@sendgrid/mail";

export async function sendEmailToUser(userEmail, name, newLocation, numeroDelUsuario) {
    console.log(userEmail);
    
    await sgMail.setApiKey(process.env.API_KEY_SENDGRIND);
    const msg = {
        to: userEmail,
        from: "jtorales2016@gmail.com",
        subject: ` ${name} vio tu mascota`,
        text: `el celular de la persona que lo vio: ${numeroDelUsuario}`,
        html: `<strong> Tu mascota fue vista en ${newLocation}</strong>
        y su celular es  ${numeroDelUsuario}  `,
    }
    const enviarMail = await sgMail.send(msg)
    .then(() => {
        console.log("email enviado");
        return {email:true,enviarMail}

    }) .catch((error) => {
        return {email:false,enviarMail}

      })
}