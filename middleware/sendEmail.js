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
        from:"wowww1996@gmail.com",
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