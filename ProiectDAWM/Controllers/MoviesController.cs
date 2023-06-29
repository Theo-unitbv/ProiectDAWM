using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProiectDAWM.Services;
using ProiectDAWM.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectDAWM.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MoviesController : Controller
  {
    IMoviesCollection _moviesCollection;
    public MoviesController(IMoviesCollection movies)
    {
      _moviesCollection = movies ?? throw new ArgumentNullException(nameof(MoviesCollection));
    }

    /// <summary>
    /// returns all movies
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      List<Movie> movies = await _moviesCollection.GetAll();
      return Ok(movies);
    }

    ///// <summary>
    ///// adds a movie
    ///// </summary>
    ///// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Movie movie)
    {
      var result = await _moviesCollection.Create(movie);

      return StatusCode(200);
    }

    ///// <summary>
    ///// updates a movie
    ///// </summary>
    ///// <param name="announcement"></param>
    ///// <returns></returns>
    [HttpPut("update/{id}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] Movie movie)
    {
      var result = await _moviesCollection.Update(id, movie);

      return result ? StatusCode(200) : NotFound();
    }

    ///// <summary>
    ///// deletes a movie
    ///// </summary>
    ///// <param name="id"></param>
    ///// <returns></returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAnnouncement([FromRoute] Guid id)
    {
      var result = await _moviesCollection.Delete(id);

      return result ? StatusCode(200) : NotFound();
    }
  }

}

