import React, { useState } from 'react';
import './App.css';

function App() {
  // 假设的特征数据，每个特征有多个选项
  const [features] = useState({
    category: ['风景', '动物', '城市'],
    color: ['红色', '绿色', '蓝色']
    // 可以根据需要添加更多特征
  });

  // 初始化选择的特征
  const initialSelectedFeatures = {};
  Object.keys(features).forEach((feature) => {
    initialSelectedFeatures[feature] = features[feature][0];
  });
  const [selectedFeatures, setSelectedFeatures] = useState(initialSelectedFeatures);

  // 假设的图片数据
  const [images, setImages] = useState([
    // 示例图片数据
    { id: 1, url: 'IMG_4242.jpeg', category: '风景', color: '红色', title: '红色风景' },
    { id: 2, url: 'IMG_4242.jpeg', category: '动物', color: '红色', title: '红色动物' },
    { id: 3, url: 'IMG_4242.jpeg', category: '城市', color: '红色', title: '红色城市' },
    { id: 4, url: 'IMG_4242.jpeg', category: '风景', color: '绿色', title: '绿色风景' },

    // 更多图片...
  ]);

  // 根据选择的特征筛选图片
  const filteredImages = images.filter((image) =>
    Object.entries(selectedFeatures).every(
      ([feature, value]) => image[feature] === value
    )
  );

  // 更新选中的特征
  const handleFeatureSelection = (feature, value) => {
    setSelectedFeatures((prevFeatures) => ({
      ...prevFeatures,
      [feature]: value
    }));
  };

  return (
    <div className="app-container">
      {Object.entries(features).map(([feature, options]) => (
        <div key={feature} className="dropdown-container">
          <label>{feature}:</label>
          <select
            value={selectedFeatures[feature]}
            onChange={(e) => handleFeatureSelection(feature, e.target.value)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="card-container">
        {images.map((image) => (
          <div key={image.id} className="card">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
