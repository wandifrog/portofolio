<template>
    <div class="container">
        <router-link tag="span" to="/" class="close">
            <i class="material-icons">close</i>
        </router-link>
        <div class="header">SMS Gateway</div>
        <div class="subheader">Technology :</div>
        <div class="tech">
            <div class="tech__list">Nodejs</div>
            <div class="tech__list">Nexmo&nbspAPI</div>
            <div class="tech__list">Vue</div>
            <div class="tech__list">Firebase</div>
            <div class="tech__list">Javascript</div>
            <div class="tech__list">CSS</div>
            <div class="tech__list">HTML</div>
        </div>
        <div class="clear"></div>
        <div class="subheader">Description :</div>
        <div class="subheader">Link :</div>
        <a target="_blank" href="https://wandi-frog.firebaseapp.com/smsgateway" class="link">https://wandi-frog.firebaseapp.com/smsgateway
            <i class="material-icons">open_in_new</i>
        </a>
    </div>
</template>

<style scoped>
.clear {
    clear: both
}
.link,
.link i {
    color: #FFC107;
    cursor: pointer;
}

.link i {
    position: absolute;
    margin-left: 5px;
    font-size: 18px;
}

.tech__list {
    float: left;
    margin: 10px 8px 0 3px;
    padding: 4px 12px;
    background-color: #FFC107;
    font-size: 15px;
    color: #FAFAFA;
    border-radius: 13px;
}

.subheader {
    font-weight: 500;
    font-size: 17px;
    color: rgba(0, 0, 0, .38);
    margin-top: 25px;
}

.container {
    position: relative;
    max-width: 800px;
    margin: 20px auto;
    padding: 30px 15px;
}

.header {
    color: rgba(0, 0, 0, .78);
    display: inline-block;
    padding: 0 50px 10px 0;
    border-bottom: 3px solid #FFC107;
    font-size: 30px;
    font-weight: 400;
}

.close {
    position: absolute;
    text-align: center;
    vertical-align: middle;
    top: 20px;
    right: 20px;
    line-height: 60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;
    background-color: #FFC107;
    transition: 300ms ease;
}

@keyframes close {
    0%,
    100% {
        transform: scale(1, 1)
    }
    30% {
        transform: scale(.8, .8)
    }
    60% {
        transform: scale(.9, .9)
    }
}

.close:hover {
    background-color: #FFB300;
    animation: close 490ms linear
}

.close i {
    color: #FFF8E1;
    font-size: 40px;
}

.close:active {
    transform: scale(.8, .8)
}
</style>
