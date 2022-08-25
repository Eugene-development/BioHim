const info = 'Мы открыты';
const link = {
    value: 'Посетите наши офисы',
    path: 'contacts'
};

const H1 = `
<h1 class="mt-4 tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 text-4xl lg:text-4xl xl:text-5xl antialiased">
<span class="md:block">Перекись водорода</span>
<span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-cyan-400 sm:pb-5">H2O2 оптом</span>
</h1>
`;

const text_1 =
    'Перекись водорода или пероксид водорода (Н-О-О-Н) - прозрачная, бесцветная жидкость. Используется только в водных растворах, и смешивающаяся с водой в любых соотношениях. При низких концентрациях перекись водорода не имеет запаха, при высоких концентрациях - имеет несколько резкий запах. Молекулярный вес перекиси водорода 34,02.';
const text_2 =
    'Перекись водорода - негорючая, пожаровзрывоопасная жидкость, является сильным окислителем, энергично вступающим в реакции со многими веществами. Она способна самопроизвольно разлагаться на воду и кислород, это свойство особенно важно из-за возрастающей в последнее время озабоченности состоянием окружающей среды.';


const apiMail = import.meta.env.VITE_API_MAIL
const apiToken = import.meta.env.VITE_TOKEN
const header = 'Экспресс заявка';
const subheader = 'ответим в течении 24 часов'
const nameForm = 'Введите имя'
const phoneForm = 'Ваш телефон'
const addressForm = null
const timeForm = null
const emailForm = 'Ваша почта'
const variantForm = 'Вид перекиси'
const volumeForm = 'Необходимый объём'
const comment = 'После отправки заявки с вами свяжется менеджер для уточнения нюансов'



const contentForm_v1 = {
    apiMail,
    apiToken,
    header,
    subheader,
    nameForm,
    phoneForm,
    addressForm,
    timeForm,
    emailForm,
    variantForm,
    volumeForm,
    comment
};

export const content_Main_v1 = {
    contentForm_v1,
    info,
    link,
    H1,
    text_1,
    text_2
};
