#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Wen.MvcSinglePage.Models.Api;

#endregion

namespace Wen.MvcSinglePage.Controllers.Api
{
    public class DemoController : ApiController
    {
        private readonly IList<DemoViewModel> _demos = new List<DemoViewModel>();

        public DemoController()
        {
            InitDemo();
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="demo"></param>
        /// <returns></returns>
        [HttpPost]
        public DemoViewModel Add([FromBody] DemoViewModel demo)
        {
            _demos.Add(demo);

            return demo;
        }

        /// <summary>
        /// 获取
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DemoViewModel Get(int id)
        {
            return _demos.FirstOrDefault(x => x.Id == id);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public int Del(int id=0)
        {
            var demo = _demos.FirstOrDefault(x => x.Id == id);
            if (demo != null)
                _demos.Remove(demo);

            return id;
        }

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="demo"></param>
        /// <returns></returns>
        [HttpPut]
        public DemoViewModel Update([FromBody] DemoViewModel demo)
        {
            var entity = _demos.FirstOrDefault(x => x.Id == demo.Id);
            if (entity == null) return demo;

            entity.Name = demo.Name;
            entity.Price = demo.Price;

            return demo;
        }

        /// <summary>
        /// 详情
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<DemoViewModel> Details(int pageIndex)
        {
            const int pageSize = 10;
            return _demos.Skip(pageSize * (pageIndex - 1)).Take(pageSize);
        }

        /// <summary>
        /// 初始化 Demo
        /// </summary>
        private void InitDemo()
        {
            var random = new Random();
            for (var i = 0; i < 100; i++)
            {
                _demos.Add(new DemoViewModel
                {
                    Id = i,
                    Name = $"商品：{i}",
                    Price = random.Next()
                });
            }

        }
    }
}