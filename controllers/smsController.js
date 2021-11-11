const axios = require('axios')


const SendBulkSms =(req,res)=>{
   

    const recipients = req.body.recipients
    const message = req.body.message

    const formData = {
        shortCode:"Naivas",
        recipients,
        message

      }


    axios({ 
        method: "post",
        url: "https://app.apiproxy.co/sms/v1/bulk/api_submit",
        data: formData,
        headers: {
            "Content-Type": "application/json",
            "X-Authorization-Key": "Q2ZtR0N5ODYrazlWWTZtUWtBUnJTN0NKejljeE1FNDFTSVNhZWh0SjJ4Y2NPZ3dtZ0g0N1dCdHNKTm1PSThVY3JnQkl4UzFaS1VVWGtBOXZKdWZXcE5tMFFyMWY1L2JuaWFqdTVzWlQ0bVArTElTYXZHNDJJS0p6d1dEUC9Rb3c1TDNhR0lYanBSSU8wM3FJTTVhOVRHakJLSW80QkFMUzZuL0JUZnJNMXJRc2lEc3FxS3dSS0cxRHB6Yk4ya3F0QVVOZGRYZDZaU0QrTUJTQXo1VE1UWmlic3JpNjFmaE44UWdSaGIvN3lpTDFDeVJyaExDa1ZKTlM0QW9BTHJrY2VLUzFyU2JoVXh1WlBIVGZxTnlEVVBkYTM4MkUvVmlQN0xwNWZqdmkyWEtMSjd3UnFjSW1zTlF3Mzc1OXhEK1BVYmZMNWl0Rm9JQUNyNHllZkkzVXVBPT06OhHjXO9gzExEEjwZ3iZjJXo=",
            "X-Requested-With": "XMLHttpRequest",
          },

    })
    .then(resp=>{
        
        return res.send(resp.data.statusDescription)
    })
    .catch(function(err) {
        console.log(err)
        return res.send(err)
        
    })







}



exports.SendBulkSms = SendBulkSms