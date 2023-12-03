import { useState } from 'react';

export default function AddProductModal() {
    const [productInfo, setProductInfo] = useState({
        name: '',
        image: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductInfo({ ...productInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 處理提交作品詳細邏輯
        console.log('提交的作品信息:', productInfo);
        // 清空表單或關閉模態框
        setProductInfo({
            name: '',
            image: '',
        });
    };

    return (
        
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h2>填寫作品詳細訊息</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            作品名稱:
                            <input type='text' name='name' value={productInfo.name} onChange={handleInputChange} />
                        </label>
                        <label>
                            圖片URL:
                            <input type='text' name='image' value={productInfo.image} onChange={handleInputChange}></input>
                        </label>

                        <button type='submit'>提交</button>
                    </form>
                </div>

            </div>
        </>
    )
}

