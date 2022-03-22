const nodemailer =require("nodemailer")
const sendEmail=(options)=>{
    const transporter=nodemailer.createTransport({
        
        service:"SendGrid",
        auth:{
            user:"apikey",
            pass:"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",
        }
    })

    const mailOptions={
        from:"saifhendili12@gmail.com",
        to:options.to,
        subject:options.subject,
        html:options.text
    }
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log(info)

        }
    })
}
module.exports=sendEmail