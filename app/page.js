import GradualGallery from "@/components/GradualGallery";
import Header from "@/components/Header";
import ShowcaseStackSlider from "@/components/ImageSlider";
import Info from "@/components/Info";
import Item from "@/components/Item";
import Test from "@/components/Test";

export default function Home() {
  return (

    <div className="overflow-hidden select-none">
      <Header />
      <Info />
      <Item />
      <GradualGallery />
      <Test />
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <ShowcaseStackSlider images={['/images/4.jpg', '/images/3.jpg', '/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg']} />
        <ShowcaseStackSlider images={['/images/3.jpg', '/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg', '/images/4.jpg']} />
        <ShowcaseStackSlider images={['/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg', '/images/4.jpg', '/images/3.jpg']} />
      </div>
    </div>
  );
}
