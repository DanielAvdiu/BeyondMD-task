from django.db import models

# Create your models here.
class Note(models.Model):
    note_id = models.AutoField(primary_key=True, default=0)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    
    def __str__(self):
        return f"Note: {str(self.note_id)} - {self.title}"

