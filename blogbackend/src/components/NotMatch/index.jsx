import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../static/css/NotMatch.css'

export default () => {
    const navigate = useNavigate()
    const backHome = () => {
        navigate('/index')
    }
    return (
        <div className='not-match'>
        <Result
            status="404"
            title="404"
            subTitle="抱歉，您访问的页面不存在！"
            extra={<Button onClick={backHome} type="primary">回到首页</Button>}
        />
        </div>
    )
};