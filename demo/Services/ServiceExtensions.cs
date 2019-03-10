using demo.Services;
using demo.Data;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceExtensions
    {
        public static void AddInfo(this IServiceCollection service)
        {
            service.AddScoped<IAppInfoService, AppInfoData>();
        }         
    }
}