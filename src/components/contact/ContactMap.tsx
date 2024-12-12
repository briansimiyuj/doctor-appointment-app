const ContactMap: React.FC = ()=>{

    return(

        <div className="w-full mb-10 h-[400px]">

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8169132825856!2d36.8854!3d-1.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTMnMDYuNiJTIDM2wrA1MycwNy40IkU!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske" 
                width="100%"
                height="100%"
                style={{ border:0 }}
                allowFullScreen={ true }
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

        </div>

    )

}

export default ContactMap