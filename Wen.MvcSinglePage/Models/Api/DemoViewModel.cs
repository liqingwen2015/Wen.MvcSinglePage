using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wen.MvcSinglePage.Models.Api
{
    public class DemoViewModel
    {
        public int Id { get; set; }

        /// <summary>
        /// 商品名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 价格
        /// </summary>
        public decimal Price { get; set; }
    }
}