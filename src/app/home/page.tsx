import React from 'react';
import { Button } from '@/components/stories';

const Home: React.FC = () => {
  return (
    <div>
      <label>これはHome画面です。</label>
      <br />
      <br />

      <Button primary label="保存" />
      <br />

      {/* tailwind cssの設定が反映されているか確認用 */}
      <p className="text-3xl text-red-500 font-bold">Hello Tailwind</p>
    </div>
  );
};

export default Home;
