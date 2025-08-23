import React , {useState} from 'react';
import '../../css/lookbook/lookbook.css';
function LookBook() {
    return (
        <div className='container-lookbook'>
            <title>LookBook | AohoShop</title>
            {/*PART 1*/}
            <div className='title-part-category'>
                <div className='title'>
                    <h1>01</h1>
                    <p>Ajrakh Kurta</p>
                </div>
                <img src='/assets/picture/lookbook_01_banner.png' className='image-beside-title'/>
            </div>
            <div className='category-products'>
                <img src='/assets/picture/lookbook_011_big.png' className='image-big'/>
                <img src='/assets/picture/lookbook_011_small.png' className='image-small'/>
                <div className='details'>
                    <div className='product-title'>
                        <p>NEELAM MIRROR WORK <br></br>AJRAKH KURTA</p>
                    </div>
                    <div className='price'>
                        <p>&#8377; 2,090.00</p>
                    </div>
                    <div className='add-to-cart-button'>
                        <p>ADD TO CART</p>
                    </div>
                </div>
            </div>
            <div className='category-products'>
                <div className='type-b'>
                    <div className='details'>
                        <div className='product-title'>
                            <p>Bengal kantha embroidered ajrakh patch work kurta</p>
                        </div>
                        <div className='price'>
                            <p>&#8377; 2,190.00</p>
                        </div>
                        <div className='add-to-cart-button'>
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                    <img src='/assets/picture/lookbook_012_small.png' className='image-small'/>
                    <img src='/assets/picture/lookbook_012_big.png' className='image-big'/>
                </div>
            </div>

            {/*PART 2*/}

            <div className='title-part-category'>
                <div className='title'>
                    <h1>02</h1>
                    <p>Bagh Printed Kurtas</p>
                </div>
                <img src='/assets/picture/lookbook_02_banner.png' className='image-beside-title'/>
            </div>
            <div className='category-products'>
                <img src='/assets/picture/lookbook_021_big.png' className='image-big'/>
                <img src='/assets/picture/lookbook_021_small.png' className='image-small'/>
                <div className='details'>
                    <div className='product-title'>
                        <p>Bagh printed kurta <br/>dupatta set - gulmohar</p>
                    </div>
                    <div className='price'>
                        <p>&#8377; 2,490.00</p>
                    </div>
                    <div className='add-to-cart-button'>
                        <p>ADD TO CART</p>
                    </div>
                </div>
            </div>
            <div className='category-products'>
                <div className='type-b'>
                    <div className='details'>
                        <div className='product-title'>
                            <p>Bagh kurta dupatta set</p>
                        </div>
                        <div className='price'>
                            <p>&#8377; 2,690.00</p>
                        </div>
                        <div className='add-to-cart-button'>
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                    <img src='/assets/picture/lookbook_022_small.png' className='image-small'/>
                    <img src='/assets/picture/lookbook_022_big.png' className='image-big'/>
                </div>
            </div>

            {/*PART 3*/}

            <div className='title-part-category'>
                <div className='title'>
                    <h1>03</h1>
                    <p>Katha Collection</p>
                </div>
                <img src='/assets/picture/lookbook_03_banner.png' className='image-beside-title'/>
            </div>
            <div className='category-products'>
                <img src='/assets/picture/lookbook_031_big.png' className='image-big'/>
                <img src='/assets/picture/lookbook_031_small.png' className='image-small'/>
                <div className='details'>
                    <div className='product-title'>
                        <p>Kantha work kurts duptta set <br/> ( shade- white & blue )</p>
                    </div>
                    <div className='price'>
                        <p>&#8377; 3,580.00</p>
                    </div>
                    <div className='add-to-cart-button'>
                        <p>ADD TO CART</p>
                    </div>
                </div>
            </div>
            <div className='category-products'>
                <div className='type-b'>
                    <div className='details'>
                        <div className='product-title'>
                            <p>Bengal kantha embroidered ajrakh patch work kurta</p>
                        </div>
                        <div className='price'>
                            <p>&#8377; 2,690.00</p>
                        </div>
                        <div className='add-to-cart-button'>
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                    <img src='/assets/picture/lookbook_032_small.png' className='image-small'/>
                    <img src='/assets/picture/lookbook_032_big.png' className='image-big'/>
                </div>
            </div>

            {/*PART 4*/}

            <div className='title-part-category'>
                <div className='title'>
                    <h1>04</h1>
                    <p>Bagru Collection</p>
                </div>
                <img src='/assets/picture/lookbook_04_banner.png' className='image-beside-title'/>
            </div>
            <div className='category-products'>
                <img src='/assets/picture/lookbook_041_big.png' className='image-big'/>
                <img src='/assets/picture/lookbook_041_small.png' className='image-small'/>
                <div className='details'>
                    <div className='product-title'>
                        <p>Mirror work bagru printed kurta</p>
                    </div>
                    <div className='price'>
                        <p>&#8377; 1,990.00</p>
                    </div>
                    <div className='add-to-cart-button'>
                        <p>ADD TO CART</p>
                    </div>
                </div>
            </div>
            <div className='category-products'>
                <div className='type-b'>
                    <div className='details'>
                        <div className='product-title'>
                            <p>Mirror work bagru kurta - hathi ghoda palki</p>
                        </div>
                        <div className='price'>
                            <p>&#8377; 1,990.00</p>
                        </div>
                        <div className='add-to-cart-button'>
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                    <img src='/assets/picture/lookbook_042_small.png' className='image-small'/>
                    <img src='/assets/picture/lookbook_042_big.png' className='image-big'/>
                </div>
            </div>

        </div>
    );
};
export default LookBook;