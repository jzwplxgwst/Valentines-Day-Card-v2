document.addEventListener("DOMContentLoaded", () => {
    const acceptButton = document.querySelector('.accept-button');
    acceptButton.addEventListener('click', () => {
        window.location.href = 'yesButton.html';
    });

    const rejectButton = document.querySelector('.reject-button');
    rejectButton.addEventListener('mouseover', () => {
        const randomStatements = [
            "Are you sure?",
            "You know you want to say yes !!",
            "Can I change your mind?",
            "What if I beg ??",
            "PLEASE !!!",
            "But I really like you!",
            "You’re breaking my heart!",
            "Say yes, and I’ll make it worth it!",
            "I’ll give you all the chocolates!",
            "You’re my one and only!",
            "We’re meant to be together!",
            "I’ll be your Valentine forever!",
            "You’re my favorite person!",
            "I’ll give you a thousand roses!",
            "Don’t make me cry!",
            "You’re too cute to say no!",
            "I’ll do your homework for a week!",
            "I’ll share my snacks with you!",
            "I’ll let you win at games!",
            "I’ll give you unlimited hugs!",
            "I’ll bake you cookies!",
            "I’ll let you pick the movie!",
            "I’ll give you my last slice of pizza!",
            "I’ll be your personal cheerleader!",
            "You’re really gonna do me like this?",
            "I’ll tell your mom!",
            "I’ll cry… a lot!",
            "I’ll stop eating your fries!",
            "I’ll stop stealing your hoodies!",
            "I’ll stop sending you TikToks!",
            "I’ll stop calling you at 3 AM!",
            "I’ll stop stealing your snacks!",
            "This is the worst day of my life!",
            "I’ll never recover from this!",
            "My heart is shattered!",
            "I’ll write a sad poem about this!",
            "I’ll never love again!",
            "I’ll go live in the woods alone!",
            "I’ll become a hermit!",
            "I’ll cry into my pillow tonight!",
            "I’ll never smile again!"
        ];
        const randomIndex = Math.floor(Math.random() * randomStatements.length);
        rejectButton.innerHTML = randomStatements[randomIndex];

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const randomLeft = Math.random() * (screenWidth - rejectButton.offsetWidth);
        const randomTop = Math.random() * (screenHeight - rejectButton.offsetHeight);

        rejectButton.style.position = 'fixed';
        rejectButton.style.left = `${randomLeft}px`;
        rejectButton.style.top = `${randomTop}px`;
        rejectButton.style.zIndex = '999';
    });
});
