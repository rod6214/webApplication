using demo.Models.Information;
using System.Collections.Generic;

namespace demo.Services
{
    public interface IAppInfoService
    {
         IEnumerable<AppInfo> GetAll();
    }
}