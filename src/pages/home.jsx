import React , {useEffect} from 'react';
import Banner from '../components/jsx/home/main_banner';
import Shop_by_category from '../components/jsx/home/shop_category_new_home';
import Frames from '../components/jsx/home/frame_part_home';
import Shop_by_craft from '../components/jsx/home/shop_craft_home';
import Made_in_bengal from '../components/jsx/home/made_in_bengal_home';
import Customer_review from '../components/jsx/home/customer_review_home';
import Video from '../components/jsx/home/rang_fiza_video_home';

function home(){
    return (
        <>
            <Banner/>
            <Shop_by_category/>
            <Frames/>
            <Shop_by_craft/>
            <Video/>
            <Made_in_bengal/>
            <Customer_review/>
        </>
    );
}
export default home;