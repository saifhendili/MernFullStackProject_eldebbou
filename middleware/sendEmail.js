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
        from:"mohamedsaifeddine.hendili@esprit.tn",
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