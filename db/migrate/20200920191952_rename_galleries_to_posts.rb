class RenameGalleriesToPosts < ActiveRecord::Migration[5.2]
  def change
    rename_table :galleries, :posts
  end
end