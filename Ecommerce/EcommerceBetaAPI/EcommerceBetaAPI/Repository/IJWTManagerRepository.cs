using EcommerceBetaAPI.Models;

namespace EcommerceBetaAPI.Repository
{
    public interface IJWTManagerRepository
    {
        Tokens Authenticate(Users users);
    }
}
