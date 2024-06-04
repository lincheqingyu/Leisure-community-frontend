import React, { useState } from 'react'
import './Publish.css'
import Header from "@/components/Header/Header"; // 导入样式文件

const Publish = () => {
  // 使用状态来管理主题、按钮选择、正文和图片
  const [topic, setTopic] = useState('')
  const [selectedOption, setSelectedOption] = useState('idle') // 初始选择闲置
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  // 处理主题输入变化的函数
  const handleTopicChange = (event) => {
    setTopic(event.target.value)
  }

  // 处理按钮选择的函数
  const handleOptionSelect = (option) => {
    setSelectedOption(option)
  }

  // 处理正文输入变化的函数
  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  // 处理图片上传的函数
  const handleImageUpload = (event) => {
    // 这里可以处理图片上传逻辑
    // 例如，你可以使用 FileReader 来预览图片
    const uploadedImage = event.target.files[0]
    setImage(uploadedImage)

    // 在这里也可以执行其他与图片上传相关的操作
    console.log('上传图片:', uploadedImage)
  }

  // 处理发布按钮点击事件
  const handlePublish = () => {
    // 在这里可以执行发布逻辑，将主题、按钮选择、正文、图片等信息提交到后端或进行其他操作
    console.log('发布内容:', { topic, selectedOption, content, image })
  }

  return (
    <div className='publish-all'>
      <Header />
      <div className='publish-container'>
        <div className='publish-header'>
          <span className='publish-title'>主题：</span>
          <input
            type='text'
            placeholder='请输入主题'
            value={topic}
            onChange={handleTopicChange}
          />
          <div className='publish-options'>
            <button
              className={selectedOption === 'idle' ? 'selected' : ''}
              onClick={() => handleOptionSelect('idle')}
            >
              出闲置
            </button>
            <button
              className={selectedOption === 'seeking' ? 'selected' : ''}
              onClick={() => handleOptionSelect('seeking')}
            >
              求闲置
            </button>
          </div>
        </div>
        <div className='publish-content'>
          <textarea
            placeholder='请输入正文'
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div className='file-upload-container'>
          <label form='file-input' className='file-input-label'>
            +
          </label>
          <input id='file-input' type='file' accept='image/*' onChange={handleImageUpload} />
        </div>
        {image && (
          <div className='image-preview'>
            <img src={URL.createObjectURL(image)} alt='上传的图片' />
          </div>
        )}
        <button className='publish-button' onClick={handlePublish}>
          发布
        </button>
      </div>
    </div>
  )
}

export default Publish;



