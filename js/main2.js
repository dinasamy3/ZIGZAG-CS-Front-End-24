

function calculateAgeInYearsMonthsDays(N) {
    const years = Math.floor(N / 365);
    const months = Math.floor((N % 365) / 30);
    const days = N % 30;
    
    console.log(`${years} years`);
    console.log(`${months} months`);
    console.log(`${days} days`);
}

 
calculateAgeInYearsMonthsDays(400);
calculateAgeInYearsMonthsDays(800);
calculateAgeInYearsMonthsDays(30);
