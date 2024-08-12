const namesData = [
    { firstName: 'דוד', lastName: 'כהן' },
    { firstName: 'יוסף', lastName: 'לוי' },
    { firstName: 'משה', lastName: 'מזרחי' },
    { firstName: 'אברהם', lastName: 'פרץ' },
    { firstName: 'יעקב', lastName: 'ביטון' },
    { firstName: 'יצחק', lastName: 'פרידמן' },
    { firstName: 'מיכאל', lastName: 'אברהם' },
    { firstName: 'חיים', lastName: 'דהן' },
    { firstName: 'דניאל', lastName: 'כץ' },
    { firstName: 'שלמה', lastName: 'אזולאי' },
    { firstName: 'שמואל', lastName: 'מלכה' },
    { firstName: 'אליהו', lastName: 'דוד' },
    { firstName: 'מאיר', lastName: 'חדד' },
    { firstName: 'מרדכי', lastName: 'עמר' },
    { firstName: 'שמעון', lastName: 'אוחיון' },
    { firstName: 'יהודה', lastName: 'גבאי' },
    { firstName: 'ישראל', lastName: 'יוסף' },
    { firstName: 'אורי', lastName: 'קליין' },
    { firstName: 'אלכסנדר', lastName: 'לוין' },
    { firstName: 'איתי', lastName: 'שפירא' },
    { firstName: 'רפאל', lastName: 'בן דוד' },
    { firstName: 'בנימין', lastName: 'סגל' },
    { firstName: 'גיא', lastName: 'אדרי' },
    { firstName: 'אריאל', lastName: 'אשכנזי' },
    { firstName: 'רועי', lastName: 'משה' },
    { firstName: 'צבי', lastName: 'חזן' },
    { firstName: 'יונתן', lastName: 'שורץ' },
    { firstName: 'אלון', lastName: 'טל' },
    { firstName: 'שלום', lastName: 'רוזנברג' },
    { firstName: 'עמית', lastName: 'חן' },
    { firstName: 'נועם', lastName: 'אוחנה' },
    { firstName: 'יהונתן', lastName: 'יצחק' },
    { firstName: 'אריה', lastName: 'יעקב' },
    { firstName: 'ליאור', lastName: 'שטרן' },
    { firstName: 'עידו', lastName: 'גרינברג' },
    { firstName: 'יאיר', lastName: 'בר' },
    { firstName: 'שי', lastName: 'שלום' },
    { firstName: 'יובל', lastName: 'גולן' },
    { firstName: 'איתן', lastName: 'בכר' },
    { firstName: 'עומר', lastName: 'אליהו' },
    { firstName: 'בוריס', lastName: 'אלבז' },
    { firstName: 'אהרן', lastName: 'דיין' },
    { firstName: 'אסף', lastName: 'שמש' },
    { firstName: 'תומר', lastName: 'סויסה' },
    { firstName: 'עידן', lastName: 'גולדשטיין' },
    { firstName: 'נסים', lastName: 'מאיר' },
    { firstName: 'נתנאל', lastName: 'מור' },
    { firstName: 'אלי', lastName: 'נחום' },
    { firstName: 'איתמר', lastName: 'אטיאס' },
    { firstName: 'טל', lastName: 'שרעבי' }
];

function replacePlaceholders() {
    if (namesData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * namesData.length);
    const { firstName, lastName } = namesData[randomIndex];

    document.getElementById('family-placeholder').textContent = lastName;
    document.getElementById('name-placeholder').textContent = firstName;
}

function calculateTimeRemaining(endTime) {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const now = new Date().getTime();
    let endTime = localStorage.getItem('countdownEndTime');

    if (!endTime || now > endTime) {
        const daysToAdd = Math.floor(Math.random() * 3) + 1;
        const hoursToAdd = Math.floor(Math.random() * 12) + 1;
        endTime = now + daysToAdd * 24 * 60 * 60 * 1000;

        const resetOffset = hoursToAdd * 60 * 60 * 1000;
        const randomResetTime = endTime - resetOffset;
        
        if (now > randomResetTime) {
            endTime = now + daysToAdd * 24 * 60 * 60 * 1000;
        }
        
        localStorage.setItem('countdownEndTime', endTime);

        replacePlaceholders();
    }

    const time = calculateTimeRemaining(endTime);

    document.getElementById('days').textContent = String(time.days).padStart(2, '0');
    document.getElementById('hours').textContent = String(time.hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(time.minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(time.seconds).padStart(2, '0');
}

replacePlaceholders();
updateCountdown();

setInterval(updateCountdown, 1000);
