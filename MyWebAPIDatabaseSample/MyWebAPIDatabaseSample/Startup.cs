using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyWebAPIDatabaseSample.Startup))]
namespace MyWebAPIDatabaseSample
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
