const base = {
    get() {
        return {
            url : "http://localhost:8080/jidongchepaihao/",
            name: "jidongchepaihao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jidongchepaihao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "机动车号牌管理系统"
        } 
    }
}
export default base
