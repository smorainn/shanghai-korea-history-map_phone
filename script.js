const points = [
  null,
  {
    title: "安昌浩旧居&思南路幼儿园",
    imgName: "安昌浩旧居与思南路幼儿园",  // 👈 专门给图片用的名字（无&）
    content: "思南路幼儿园创建于1956年，是上海市示范性幼儿园，总部位于思南路91号。安昌浩在1919年5月25日抵沪后租下。",
    pos: {
      "1918": { left: "69.65%", top: "35.75%" },
      "1932": { left: "56.8%", top: "44%" },
      "current": { left: "25.2%", top: "65%" }
    }
  },
  {
    title: "法国公园&复兴公园",
    imgName: "法国公园与复兴公园",  // 👈 专门给图片用的名字（无&）
    content: "复兴公园位于上海市雁荡路105号，东邻重庆南路，南临复兴中路，西近思南路，北与科学会堂等为界。公园有四个大门出入；南门在复兴中路重庆南路转角；北门在雁荡路；西门出皋兰路；东门出重庆南路。1995年全园面积为8.89万平方米。复兴公园是上海唯一一座保留法国古典式风格的园林，也是近代上海中西园林文化交融的杰作。独立运动家李东辉将军与金山等青年常来散步。并在大草坪上（今：马恩铜像）拍下来沪同胞大合照。",
    pos: {
      "1918": { left: "75.5%", top: "33%" },
      "1932": { left: "60.9%", top: "42.6%" },
      "current": { left: "30%", top: "60%" }
    }
  },
  {
    title: "K11",
    imgName: "K11",
    content: "K11是由新世界集团执行副主席兼行政总裁郑志刚于2008年创立的全球首个融合艺术、人文、自然三大核心元素的原创品牌，首家项目于2009年11月27日在香港尖沙咀开幕，被誉为\"全球首个购物艺术馆\"。品牌以\"博物馆零售\"理念为核心，推动商业空间与文化艺术深度融合。",
    pos: {
      "1918": { left: "0%", top: "0%" },
      "1932": { left: "0%", top: "0%" },
      "current": { left: "36.2%", top: "43%" }
    }
  },
  {
    title: "大韩民国临时政府旧址",
    imgName: "大韩民国临时政府旧址",
    content: "大韩民国临时政府旧址位于中国上海市黄浦区马当路306弄4号，占地面积191平方米，建筑面积476.5平方米。大韩民国临时政府旧址底层为会议室、卫生间、厨房，二楼为金九办公室兼卧室，三楼为寝室的基本格局。大韩民国临时政府旧址是韩国民族独立运动史的重要证据，地位重要，受到韩国官方和民间的高度关注，也是韩国官员和普通游客来沪后的\"打卡地\"，已成为中韩两国人民友谊的见证。1990年6月5日，大韩民国临时政府旧址被卢湾区人民政府（现黄浦区人民政府）公布为卢湾区文物保护单位（现黄浦区文物保护单位）。2026年1月6日，韩国总统李在明前往上海，参观日本殖民统治时期的大韩民国临时政府旧址。",
    pos: {
      "1918": { left: "83.1%", top: "40%" },
      "1932": { left: "66.35%", top: "49.7%" },
      "current": { left: "37.35%", top: "65%" }
    }
  },
  {
    title: "独立新闻编辑部",
    imgName: "独立新闻编辑部",
    content: "韩国第一份日报是《独立新闻》（The Independent News），这份报纸于1898年创刊，标志着韩国现代新闻业的开端。作为韩国历史上的第一份日报，它不仅在信息传播上发挥了重要作用，还对后来的媒体发展产生了深远影响。《独立新闻》的出现，为民众提供了一个了解国内外大事的平台，同时也推动了社会的进步和民主思想的传播。此地为韩人来沪后《独立新闻》的编辑部，见证了韩国仁人志士印刷独立思想的全过程。",
    pos: {
      "1918": { left: "86.35%", top: "26.28%" },
      "1932": { left: "70.42%", top: "40.28%" },
      "current": { left: "40.4%", top: "53%" }
    }
  },
  {
    title: "豫园",
    imgName: "豫园",
    content: "豫园，位于上海市黄浦区福佑路168号，始建于明代嘉靖、万历年间，已有450余年历史，占地30余亩，与露香园、日涉园合称为\"明朝上海三大名园\"，名列现存的上海五大古典名园之首，为国家4A级旅游景区。豫园原是明代的一座私人园林，园主人潘允端曾任四川布政使，其父潘恩官至都察院左都御史和刑部尚书。潘恩年迈辞官告老还乡，潘允端为了让父亲安享晚年，经过20余年苦心经营建成豫园，在明代中后期被公认为\"东南名园冠\"。",
    pos: {
      "1918": { left: "0%", top: "0%" },
      "1932": { left: "0%", top: "0%" },
      "current": { left: "56.8%", top: "36.5%" }
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const mapImage = document.getElementById('map-image');
  const yearButtons = document.querySelectorAll('.year-btn');
  const markers = document.querySelectorAll('.marker');
  const infoTitle = document.getElementById('info-title');
  const infoImage = document.getElementById('info-image');
  const infoText = document.getElementById('info-text');

  // 年份切换
  yearButtons.forEach(button => {
    button.addEventListener('click', () => {
      yearButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const year = button.getAttribute('data-year');
      mapImage.src = `./maps/${year}.jpg`;

      markers.forEach(marker => {
        const id = parseInt(marker.dataset.id);
        const pos = points[id].pos[year];
        marker.style.left = pos.left;
        marker.style.top = pos.top;

        if ((year === '1918' || year === '1932') && (id === 3 || id === 6)) {
          marker.style.display = 'none';
        } else {
          marker.style.display = 'block';
        }
      });
    });
  });

  // 点击点位
  markers.forEach(marker => {
    marker.addEventListener('click', () => {
      markers.forEach(m => m.classList.remove('active'));
      marker.classList.add('active');

      const id = parseInt(marker.dataset.id);
      const point = points[id];
      if (!point) return;

      infoTitle.textContent = point.title;
      infoText.textContent = point.content;

      // 👇 关键：图片用 imgName，不带 &
      infoImage.src = `./images/${id}_${point.imgName}.jpg`;
      infoImage.style.display = "block";
    });
  });

  // 初始 1918 位置
  markers.forEach(marker => {
    const id = parseInt(marker.dataset.id);
    const pos = points[id].pos["1918"];
    marker.style.left = pos.left;
    marker.style.top = pos.top;
    if (id === 3 || id === 6) marker.style.display = 'none';
  });
});