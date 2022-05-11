import { useState } from "react"
import { marked } from "marked"
import highlight from 'highlight.js'
import {Row,Col,Input,Select,Button,Form} from 'antd'

const {Option} = Select
const {TextArea} = Input

const AddArticle = () => {

    const [articleTitle, setArticleTitle] = useState('')
    const [articleContent, setArticleContent] = useState('')
    const [markdownContent, setMarkdownContent] = useState('')
    const [selectType, setSelectType] = useState('')

    return (
        <Form>
            <Row gutter={10}>
                <Col span={14}>
                    <Form.Item>
                        <Input size="large" placeholder="博客标题" />
                    </Form.Item>
                </Col>
                <Col span={2.5}>
                    <Form.Item>
                        <Select size="large" defaultValue='1'>
                            <Option value='1'>学习笔记</Option>
                            <Option value='2'>生活感悟</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col offset={3} span={2}>
                    <Form.Item>
                        <Button size="large">文章预览</Button>
                    </Form.Item>
                </Col>
                <Col span={2}>
                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit">发布文章</Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={9}>
                    <Form.Item>
                        <TextArea 
                        autoSize={{ minRows: 25, maxRows: 30 }} 
                        placeholder="输入博文"
                        >
                            
                        </TextArea>
                    </Form.Item>
                </Col>
                <Col span={9}>
                    <Form.Item>
                        <div className="show-html">
                            博文预览
                        </div>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default AddArticle