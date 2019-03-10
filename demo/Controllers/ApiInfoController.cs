using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using demo.Models.Information;
using demo.Services;
using System.Threading;

namespace demo.Controllers
{
    [Route("info")]
    public class ApiInfoController : ControllerBase
    {

        private IAppInfoService _service;

        public ApiInfoController(IAppInfoService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("applications")]
        public IEnumerable<AppInfo> GetAppInfos()
        {
            this.Response.OnStarting(()=>{
                return Task.Run(()=>{});
            });
            return _service.GetAll();
        }
    }
}