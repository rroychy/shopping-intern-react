import React, { useEffect } from 'react';
import '../../css/buypage/size-chart.css';
function SizeChart({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className='modal-content'>
        <button className='modal-close-button' onClick={onClose}>&times;</button>
        <h2>Size Chart</h2>
        <div className='size-chart-table-container'>
          <table>
            <thead>
              <tr>
                <th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>S</td><td>36</td><td>34</td><td>40</td></tr>
              <tr><td>M</td><td>38</td><td>36</td><td>42</td></tr>
              <tr><td>L</td><td>40</td><td>38</td><td>44</td></tr>
              <tr><td>XL</td><td>42</td><td>40</td><td>47</td></tr>
              <tr><td>2XL</td><td>44-46</td><td>42-43</td><td>49-51</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SizeChart;
