EBD.registerLesson({
  id: 'energy-04-system',
  module: 'energy',
  order: 4,
  title: '国网与南网的北斗应用体系',
  minutes: 4,
  keywords: ['国家电网', '南方电网', '应用体系', '北斗', '平台'],
  sections: {
    what:
      '<p>中国两大电网——国家电网、南方电网,都把北斗当作重要的<strong>时空基础设施</strong>来建,搭起各自的北斗应用体系。思路一致:<strong>把北斗能力做成全公司共享的服务,再支撑上层各种业务</strong>。</p>',
    why:
      '<p>为什么要建"体系"而不是各单位各买各的?因为<strong>统一才有规模效应和数据互通</strong>:统一的<gd data-term="shoushi">授时</gd>源、统一的高精度定位服务、统一的<gd data-term="duanbaowen">短报文</gd>通道,既省成本,又让巡检、监测、调度的数据都落在同一套<gd data-term="shikongjizhun">时空基准</gd>上。</p>',
    how:
      '<p>典型的分层(以近年通行做法为准,具体名称各家不同):</p>' +
      '<ul>' +
      '<li><strong>基础设施层</strong>:自建或接入北斗地基增强、短报文、授时等能力,形成公共服务平台。</li>' +
      '<li><strong>能力服务层</strong>:对内提供"高精度定位、精准授时、短报文通信"等标准化服务接口。</li>' +
      '<li><strong>业务应用层</strong>:巡检、形变监测、资产管理、应急、调度等各自调用这些服务。</li>' +
      '</ul>' +
      '<div class="ex">重点理解这个"<strong>平台化</strong>"逻辑:北斗能力被沉淀为公共服务,业务部门像用水用电一样调用,而不必各自重复对接卫星。</div>',
    pitfalls:
      '<div class="pit"><b>不必死记机构名称和平台叫法。</b>各电网的平台名、组织设置会随改革调整。重点是理解"<strong>统一基础设施 → 共享服务 → 多业务应用</strong>"这套架构逻辑,名字是次要的。</div>',
    links:
      '<p>· 业务应用具体有哪些,下一课《五大应用域》。<br>· 平台化的时空底座,见模块 10《时空数据底座》。'
  }
});
