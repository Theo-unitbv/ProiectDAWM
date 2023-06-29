using System;
using ProiectDAWM.Models;
using MongoDB.Driver;
using ProiectDAWM.Settings;

namespace ProiectDAWM.Services
{
  public class MoviesCollection : IMoviesCollection
  {
    private readonly IMongoCollection<Movie> _movies;
    public MoviesCollection(IMongoDBSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);

      _movies = database.GetCollection<Movie>(settings.MoviesCollectionName);

    }

    public async Task<List<Movie>> GetAll()
    {
      var result = await _movies.FindAsync(movie => true);
      return result.ToList();
    }

    public async Task<bool> Create(Movie model)
    {
      await _movies.InsertOneAsync(model);

      return true;
    }

    public async Task<bool> Delete(Guid id)
    {
      var result = await _movies.DeleteOneAsync(x => x.Id == id);

      if (!result.IsAcknowledged && result.DeletedCount == 0)
        return false;

      return true;
    }

    public async Task<bool> Update(Guid id, Movie model)
    {
      var result = await _movies.ReplaceOneAsync(x => x.Id == id, model);

      return result.IsModifiedCountAvailable;
    }
  }
}

