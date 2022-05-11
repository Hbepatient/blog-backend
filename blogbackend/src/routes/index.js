import AddArticle from "../pages/addArticle"
import NotMatch from "../components/NotMatch"
import WorkStation from "../pages/WorkStation"
import ArticleList from "../pages/ArticleList"

const adminRoutes = [
    {
        path: '/index',
        element: <WorkStation />,
        breadcrumb: '工作台'
    },
    {
        path: '/articles/*',
        children: [
            {
                path: '/addArticle',
                element: <AddArticle />,
                breadcrumb: '添加文章'
            },
            {
                path: '/articleList',
                element: <ArticleList/>,
                breadcrumb: '文章列表'
            }
        ],
        breadcrumb: '文章管理'
    }
]

export { adminRoutes }