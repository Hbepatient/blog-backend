const adminRoutes = [
    {
        path: '/index',
        element: '<WorkStation />',
        breadcrumb: '工作台'
    },
    {
        path: '/articles/*',
        children: [
            {
                path: '/addArticle',
                element: '<AddArticle />',
                breadcrumb: '添加文章'
            },
            {
                path: '/articleList',
                element: '<ArticleList/>',
                breadcrumb: '文章列表'
            }
        ],
        breadcrumb: '文章管理'
    }
]

const flat = (arr)=>{
    return arr.reduce((res, item) => {
        res.push(item)
        return res.concat(
            Array.isArray(item.children) ? flat(item.children) : []
        )
    }, [])
}

console.log(flat(adminRoutes));