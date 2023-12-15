<script>
export default {}
</script>
<template>
    <div class="loading"><h3>Loading...</h3></div>
</template>

<style scoped lang="scss">
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
@keyframes spin2 { 
    100% { 
        -webkit-transform: rotate(-360deg); 
        transform:rotate(-360deg); 
    } 
}
.loading{
        width: 200px;
        height: 200px;
        border: 10px solid #c0c9ff;
        border-radius: 50%;
        animation: spin 2s linear infinite;
        margin: 50px auto;

        h3{
            line-height: 200px;
            color: #233599;
            text-align: center;
            animation: spin2 2s linear infinite;
        }

        &::before {
            content: '';
            margin: 0 auto;
            margin-top: -15px;
            display: block;
            width: 20px;
            height: 20px;
            background-color: #233599;
            border-radius: 50%;
        }
}
</style>