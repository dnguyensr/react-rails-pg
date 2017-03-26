class Api::V1::ArtistsController < Api::V1::BaseController
    def index
        respond_with Artist.all
    end
    
    def create
        respond_with :api, :v1, Artist.create(artist_params)
    end
    
    def destroy
        respond_with Artist.destroy(params[:id])
    end
    
    def update
        artist = Artist.find(parms["id"])
        artist.update_attributes(artist_params)
        respond_with artist, json: artist
    end
    
    private

    def artist_params
        params.require(:artist).permit(:id, :name, :biography)
    end
end