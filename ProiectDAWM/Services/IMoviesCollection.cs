using System;
using ProiectDAWM.Models;
namespace ProiectDAWM.Services
{
  public interface IMoviesCollection
  {
    Task<List<Movie>> GetAll();
    Task<bool> Create(Movie model);
    Task<bool> Delete(Guid id);
    Task<bool> Update(Guid id, Movie model);
  }
}

