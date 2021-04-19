import React from 'react';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';

import './popuppreview.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PopupPreview = () => {
  return (
    <div className='flex flex-col ml-9 mr-9 py-20 font-mono mb-10 lg:mx-40'>
      <h2 className='main-title flex flex-col justify-center items-center text-lg my-20'>
        Popup Preview
      </h2>
      <Tabs>
        <TabList>
          <Tab>Essay</Tab>
          <Tab>3.1</Tab>
          <Tab>3.3</Tab>
          <Tab>5.1</Tab>
          <Tab>7.2</Tab>
          <Tab>9.2</Tab>
          <Tab>9.3</Tab>
        </TabList>

        <TabPanel>
          <div className='md:px-8 mb-20 mt-20'>
            <h3 className='title mb-8 font-semibold'>Task</h3>
            <p className='w-6/6 lg:mt-8 md:ml-10 md:mr-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              possimus officiis sed impedit, reiciendis iure quod nesciunt
              magnam qui accusantium beatae dicta obcaecati? Animi non
              architecto minima labore distinctio amet. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Assumenda beatae sed corrupti
              suscipit ea, optio molestias asperiores numquam minus at hic quae
              harum eligendi facilis labore est voluptatibus consectetur?
              Excepturi!
            </p>
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              mollitia error, facere vel totam pariatur exercitationem libero
              maiores vitae illo hic quia natus, voluptas consectetur
              dignissimos. Obcaecati magni ipsa eligendi?
            </p>
            <br />
            <img
              src={one}
              alt='Task'
              className='rounded-lg md:w-3/6 sm:w-6/6 md:float-left mr-8 mb-5 transform md:hover:scale-150 mt-8'
            />
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-4 md:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam, ipsa ex quod inventore accusamus unde consequuntur totam
              in blanditiis hic dignissimos praesentium iusto sed cumque! Beatae
              dolorem amet praesentium.
            </p>
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-4 md:mt-0'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              architecto illo nostrum, doloremque excepturi at dolorum
              laboriosam pariatur totam quos voluptates veniam exercitationem
              sit maiores? Obcaecati delectus modi nostrum earum.
            </p>
            <img
              src={two}
              alt='Trello'
              className='rounded-lg mt-8 w-6/6 mb-5'
            />
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              tempora nam quod pariatur possimus temporibus odit ipsa assumenda
              quia voluptate et, necessitatibus laboriosam aut deserunt delectus
              soluta non ad eligendi.
            </p>
            <img
              src={three}
              alt='Trello'
              className='rounded-lg w-3/6 float-right ml-8 mb-10 mt-8'
            />
            <p className='w-6/6 mt-8 md:ml-10 md:mr-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nesciunt nam, vero rem autem nihil beatae? Atque quisquam ducimus
              vel fuga, natus saepe, voluptatibus ratione quibusdam dolores,
              dolorem minima libero?
            </p>
            <p className='w-3/6 mt-8 md:ml-10 md:mr-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nesciunt nam, vero rem autem nihil beatae? Atque quisquam ducimus
              vel fuga, natus saepe, voluptatibus ratione quibusdam dolores,
              dolorem minima libero?
            </p>
          </div>
          <hr />
          <div className='md:px-8 my-20'>
            <h3 className='mb-8 font-semibold'>How</h3>
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              officiis quibusdam voluptatibus alias earum, molestiae soluta
              deserunt vitae velit maiores, non incidunt libero atque quis
              itaque nulla laborum! Nemo, exercitationem? Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Odit cupiditate ad placeat.
              Repellendus dolorum dicta nemo nobis iure cumque, fugit animi cum
              impedit delectus debitis ratione eum tempora quia soluta!
            </p>
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
              nemo nesciunt. Enim deserunt provident beatae velit! Ducimus
              dolore nam omnis veniam! Fugiat facilis quaerat libero omnis
              aliquid enim doloremque est!
            </p>
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              laboriosam quam temporibus dignissimos voluptates consequuntur
              molestiae dolorem possimus consequatur nostrum impedit, itaque
              ipsam pariatur culpa maxime ad harum repudiandae iusto.
            </p>
            <img
              src={four}
              alt='Pic of code'
              className='rounded-lg mt-8 w-6/6 mb-5'
            />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              natus? Repudiandae in esse dignissimos! Perspiciatis modi alias
              aut voluptatum enim sit excepturi quos architecto. Ea neque
              assumenda perferendis qui ratione.
            </p>
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              excepturi accusamus sed ea obcaecati consequatur quas tempora
              temporibus, voluptatum enim odio laboriosam. Sapiente possimus
              dolorum excepturi omnis harum cupiditate ipsam.
            </p>
            <img
              src={five}
              alt='Pic of code'
              className='rounded-lg w-2/6 float-left mr-4 my-8'
            />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              eum autem sapiente consectetur nihil natus soluta libero in sequi!
              Soluta inventore ea accusamus excepturi id eius nesciunt
              accusantium tempora et.
            </p>
            <br />
            <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              cumque eligendi veritatis suscipit hic iste ea, quod
              necessitatibus ducimus molestias provident blanditiis
              reprehenderit iusto, odio ipsum autem, error consectetur enim!
            </p>
            <br />
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className='mb-8 font-semibold mt-10'>Criteria 3.1</h3>
          <p className='w-6/6 lg:mt-8 md:ml-10 md:mr-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            tempore delectus odit doloremque vero, recusandae eum placeat
            consectetur dolorum exercitationem, autem deserunt accusamus nisi
            cupiditate adipisci ducimus? Iusto, esse dicta. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Laudantium veniam culpa
            repudiandae ea accusantium minus aliquam minima fuga iusto eum
            adipisci a nostrum, quas suscipit nobis voluptatibus beatae
            perferendis ipsam?
          </p>
          <br />
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            quas iure optio sit ducimus repudiandae minima excepturi omnis
            accusamus ipsum fugiat sunt voluptatum facilis alias vitae totam,
            distinctio eaque iusto.
          </p>
          <br />
          <img
            src={one}
            alt='Task'
            className='rounded-lg md:w-3/6 sm:w-6/6 md:float-left mr-8 mb-5 transform md:hover:scale-150 mt-8'
          />
          <br />
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-4 md:mt-0'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            dolorem distinctio enim asperiores alias veritatis exercitationem
            blanditiis nam doloribus veniam praesentium pariatur a suscipit
            tenetur id, voluptates, aut facere at.
          </p>
        </TabPanel>
        <TabPanel>
          <h3 className='mb-8 font-semibold mt-10'>Criteria 3.3</h3>
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dolores ea quidem sint quo repudiandae, placeat voluptatem eos iure
            necessitatibus voluptas nam iste fugit eaque eligendi itaque,
            dolorem explicabo amet.
          </p>
          <img
            src={two}
            alt='Pic of code'
            className='rounded-lg md:w-2/6 float-left mr-8 mb-8 transform md:hover:scale-150 mt-10'
          />
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minima
            totam ea id distinctio veritatis! Officiis reprehenderit veritatis
            libero eveniet fugiat deserunt esse id omnis cum expedita, minus,
            quasi ratione!
          </p>
        </TabPanel>
        <TabPanel>
          <h3 className='mb-8 font-semibold mt-10'>Criteria 5.1</h3>
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            provident a eius eum aut libero laboriosam enim obcaecati, possimus
            hic est qui sed nostrum necessitatibus dolor. Nam tenetur doloremque
            quo.
          </p>
        </TabPanel>
        <TabPanel>
          <h3 className='mb-8 font-semibold mt-10'>Criteria 7.2</h3>
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum
            aliquid id eaque, molestias beatae maxime quidem, unde provident
            dicta error ipsum animi sint impedit. Quisquam amet temporibus quasi
            commodi?
          </p>
          <img
            src={three}
            alt='Pic of code'
            className='rounded-lg w-6/6 my-8'
          />
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            incidunt odit minus quaerat adipisci quis, reiciendis mollitia, eum
            error culpa eos nihil repudiandae voluptatem distinctio sapiente
            modi ipsam tempora alias.
          </p>
          <br />
          <img
            src={four}
            alt='Pic of code'
            className='rounded-lg md:w-2/6 sm:w-6/6 md:float-right md:ml-8 transform md:hover:scale-150 my-8 '
          />
          <p className=' w-6/6 md:ml-10 md:mr-10 mt-12 md:mb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aperiam incidunt possimus aspernatur reprehenderit nemo eos adipisci
            perspiciatis et quae, pariatur, fugiat laborum sed beatae
            perferendis voluptates odit sequi illum.
          </p>
          <br />
          <p className='w-6/6 md:ml-10 md:mr-10 md:mt-15 lg:mt-20'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            explicabo veritatis nisi modi error voluptate magni dolores odit ad
            minima facere rerum voluptates repellat adipisci voluptatibus,
            consectetur fuga vitae quisquam?
          </p>
          <img src={one} alt='Pic of code' className='rounded-lg w-6/6 my-8' />
        </TabPanel>
        <TabPanel>
          <h3 className='mb-8 font-semibold mt-10'>Criteria 9.2</h3>
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            pariatur ad hic alias ducimus atque odio, deserunt tenetur eveniet
            quia esse exercitationem dolorem quisquam optio rerum libero. Ex,
            aspernatur obcaecati!
          </p>
          <img
            src={two}
            alt='Pic of code'
            className='rounded-lg w-6/6 float-left my-8'
          />
          <p className='w-6/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod neque
            magnam suscipit sequi veniam voluptatum fugit maiores esse sit,
            perferendis blanditiis quam sed vel asperiores? Quis obcaecati
            consectetur animi rem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Laudantium, aut quibusdam facere id aspernatur
            incidunt sunt sint et dicta ipsa veniam labore illum velit quasi.
            Tempore doloremque vitae ducimus exercitationem.
          </p>
        </TabPanel>
        <TabPanel>
          <h3 className='mb-8 font-semibold mt-10'>Criteria 9.3</h3>
          <img
            src={five}
            alt='Pic of code'
            className='rounded-lg md:w-1/6 md:float-left md:mr-8 my-8 transform md:hover:scale-150 '
          />
          <p className='md:w-5/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            doloribus nisi quia dicta id officiis reprehenderit dolores fuga?
            Nobis quo enim sint iste recusandae ea ad commodi, quas consectetur
            error?
          </p>
          <br />
          <p className='md:w-5/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dicta
            quibusdam alias accusantium aperiam voluptatum nemo corporis unde
            officiis minima. Sit consequatur quidem itaque atque? Consectetur
            eaque possimus beatae nam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolorum, a quis. Aliquam tempora reprehenderit
            molestiae. Corrupti minus blanditiis quasi, architecto excepturi
            explicabo exercitationem et cumque? Similique ipsa nesciunt deleniti
            et.
          </p>
          <br />
          <p className='md:w-5/6 md:ml-10 md:mr-10 lg:mt-8 md:mt-0 mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, nisi. Recusandae explicabo pariatur et voluptatibus
            facilis aliquid, deleniti neque odio quibusdam incidunt. Pariatur
            quae cumque debitis dolore animi, deserunt doloremque.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PopupPreview;
