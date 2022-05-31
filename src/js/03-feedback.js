import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector('.feedback-form'),
}

const KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(KEY)) || {};


refs.form.addEventListener('input', throttle(onFormText, 500));
refs.form.addEventListener('submit', onFormSubmit);
onPlaceTextForm();

function onFormText(evt) {
    // console.log(formData);
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(KEY, JSON.stringify(formData));
};


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
    console.log(formData);
};

// если локал хранилище имеет уже информацию, то необходимо заполнить инпуты 
function onPlaceTextForm() {
    const savedTextForm = JSON.parse(localStorage.getItem(KEY));
    
    if (savedTextForm) {
        refs.form.elements.email.value = savedTextForm.email || "";
        refs.form.elements.message.value = savedTextForm.message || "";
    }

};





























































































