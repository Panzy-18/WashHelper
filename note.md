<style>
//显示2行+...
.{
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2; //代表两行
}
</style>
============================================
使用async:
<scrpit>
    async getData(){
        const res=await request({url:""});
        //再保存数据
    }
</script>