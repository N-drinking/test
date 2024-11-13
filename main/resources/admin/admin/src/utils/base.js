const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengcycxin/",
            name: "daxueshengcycxin",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengcycxin/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生创新创业项目管理系统"
        } 
    }
}
export default base