class MoviesController < ApplicationController

    before_action :set_movie, only: %i[update destroy show]
    
    def index
        data = Movie.all
        render json: MovieEntity.represent(data), status: :ok 
    end

    def show
        movie_data = MovieEntity.represent(@movie).as_json
        director_data = DirectorEntity.represent(@movie.director).as_json
        req_data = movie_data.merge(director_data)
        render json: req_data, status: :ok
    end

    def create
        movie_data = movie_params
        director_data = director_params
        director = Director.find_by(name: director_data[:name])
        director = Director.create(director_data) unless director
        @movie = Movie.new(movie_data)
        @movie.director = director
        if @movie.save
            render json: MovieEntity.represent(@movie), status: :ok
        else
            render json: @movie.errors, status: :unprocessable_entity
        end
    end

    def update
        if @movie.update(movie_params)
            render json: MovieEntity.represent(@movie), status: :ok
        else
            render json: @movie.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @movie.destroy
    end

    private

    def movie_params
        params.permit(
            :name,:genre,:description,:id,:director_name
        )
        {
            name: params["name"],
            genre: params["genre"],
            description: params["description"]
        }
    end

    def director_params
        params.permit(
            :name,:genre,:description,:id,:director_name
        )
        {
            name: params["director_name"],
            age: params["age"] ? params["age"] : nil
        }
    end

    def set_movie
        @movie = Movie.find_by(id: params[:id])
    end
end
