<script setup>
import emailjs from 'emailjs-com';
</script>

<template>
    <div class="contact__section">
        <div class="contact__content">
            <div class="contact__form">
                <form @submit.prevent="sendEmail">
                    <div class="mb">
                        <label for="name">Kimdan:</label>
                        <input type="text" id="name" v-model="from_name">
                    </div>
                    <div class="mb">
                        <label for="number">Telefon Raqam:</label>
                        <input type="number" id="number" v-model="from_number">
                    </div>
                    <div class="mb">
                        <label>Message:</label>
                        <textarea v-model="message"></textarea>
                    </div>
                    <button type="submit">Send Email</button>
                </form>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1284.941841541079!2d72.34870646601266!3d40.750198096757444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAndijon%2C%20vip%20burger!5e0!3m2!1sru!2s!4v1684088334710!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="social__links">
                <ul class="links__group">
                    <a href="https://www.instagram.com/v.i.p_burger_/" target="_blank">
                        <li class="links__item">
                            <i class="bx bxl-instagram"></i>
                        </li>
                    </a>
                    <a href="https://t.me/vipburgerr" target="_blank">
                        <li class="links__item">
                            <i class="bx bxl-telegram"></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
emailjs.init('8ERjlfNfMnEj4fFTP');
export default {
    data() {
        return {
            from_name: '',
            message: '',
            from_number: '',
            insta: 'https://www.instagram.com/v.i.p_burger_/'
        }
    },
    methods: {
        sendEmail() {
            if (this.from_name !== '' && this.from_number !== '' && this.message) {
                emailjs.send('service_eiijl63', 'template_yap2b4j', {
                    from_name: this.from_name,
                    from_number: this.from_number,
                    message: this.message
                }
                )
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
                alert('Habar muvafakiyatli yetkazildi');
                this.from_name = '';
                this.message = '';
                this.from_number = '';
            } else {
                alert('Hamma joynni toldiring !')
            }
        }
    }
}
</script>
<style lang="scss">
.contact__section {
    height: 100vh;
    background: #252836;
    width: 100%;
    padding: 2.2408963585434174vh 1.0416666666666667vw;
    color: white;
    .contact__form {
        width: 25.296875vw;
        padding: 3.361344537815126vh 1.3020833333333333vw;
        box-shadow: 0 0 10px 0 #474e6b;
        border-radius: 10px;
        label {
            font-size: 2.2408963585434174vh;
        }
        input {
            padding: 1.361344537815126vh 1.0020833333333333vw;
            font-size: 2.2408963585434174vh;
            background-color: #474e6b;
            border: 1px solid #474e6b;
            color: white;
            outline: none;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        textarea {
            height:  28.011204481792717vh;
            padding: 1.361344537815126vh 1.0020833333333333vw;
            background-color: #474e6b;
            border: 1px solid #474e6b;
            color: white;
            outline: none;
        }
        button {
            width: 100%;
            padding: 1.361344537815126vh 0;
            background-color: #474e6b;
            border: 1px solid #474e6b;
            color: white;
            font-size: 2.2408963585434174vh;
            &:hover {
                background: white;
                color: #474e6b;
            }
        }
    }
    .mb {
        margin-bottom: 2.042016806722689vh;
        display: flex;
        flex-direction: column;
        gap: 1.4005602240896358vh;
    }
    .contact__content {
        display: flex;
        justify-content: space-around;
        margin-top: 8.403361344537815vh;
        .map {
            width: 42.317708333333336vw;
            height: 70.0280112044818vh;
            iframe {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                border: none;
            }
        }
    }
    .links__group {
        display: flex;
        flex-direction: column;
        gap: 4.2408963585434174vh;
        a {
            font-size: 4.2408963585434174vh;
            .bxl-instagram {
                background: linear-gradient(to bottom right, crimson, indigo, royalblue);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent
            }
            .bxl-telegram {
                color: rgb(46, 155, 198);
            }
            &:hover {
                text-shadow: 0 0 10px #5e6fb1;
            }
        }
    }
}
@media (min-width: 0px) and (max-width: 520px) {
    .contact__section {
        height: 100%;
        .contact__content {
            flex-direction: column;
            .map {
                width: 90%;
                margin:  1.680672268907563vh auto;
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .contact__form {
            width: 90%;
            margin:  1.680672268907563vh auto;
        }
        .links__group {
            flex-direction: row;
            height: 8rem;
            justify-content: center;
        }
    }
}
@media (min-width: 520px) and (max-width: 768px) {
    .contact__section {
        height: 100%;
        .contact__content {
            flex-wrap: wrap;
            align-items: center;
            .map {
                width: 60%;
                margin:  1.680672268907563vh auto;
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .contact__form {
            width: 60%;
        }
    }
}
</style>