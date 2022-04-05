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