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
        from:"mouna.ayed@esprit.tn",
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